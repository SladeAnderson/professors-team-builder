using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.SpaServices;
using Microsoft.EntityFrameworkCore;
using MongoDB.Driver;
using MongoDB.Bson;
using MongoDB.Driver.Core;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.AspNetCore.Identity;
using Swashbuckle.AspNetCore.Filters;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.FileProviders;
using Microsoft.OpenApi.Models;
using professorsTeamBuilder.Repositories;


namespace professorsTeamBuilder;

class Program
{
    static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);
        
        //--------------- database stuff ---------------\\

        // get connSring        
        string location = "localDefualt";

        string? connString = builder.Configuration.GetConnectionString(location);
        
        if (connString == null) {
            Console.WriteLine("you must set your 'MONGODB_URI' environment variable. To learn how to set it.\n see https://www.mongodb.com/docs/drivers/csharp/current/quick-start/#set-your-connection-string");
            Environment.Exit(0);
        }

        // makes new mongoDB settins
        
        var mongodSettings = MongoClientSettings.FromConnectionString(connString);

        mongodSettings.ServerApi = new ServerApi(ServerApiVersion.V1);

        //--------------- Add services to the container. ---------------
        builder.Services.AddControllers();

        builder.Services.AddHttpClient();


        builder.Services.AddSingleton<IMongoClient>(sp => new MongoClient(mongodSettings));
        
        builder.Services.AddTransient<IPokeapiService,PokeapiService>();
        builder.Services.AddTransient<IPokemonService,PokemonService>();
        builder.Services.AddTransient<IStartupFilter, StartupService>();

        

        builder.Services.Configure<IdentityOptions>(options => 
        {
            options.Password.RequireDigit = false;
            options.Password.RequireLowercase = false;
            options.Password.RequireUppercase = false;
            options.Password.RequireNonAlphanumeric = false;
            options.Password.RequiredUniqueChars = 1;
            options.Password.RequiredLength = 6;
        });

        builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(options => options.TokenValidationParameters = new TokenValidationParameters{
                ValidateIssuer = false,
                ValidateAudience = false,
                ValidateLifetime = true,
                ValidateIssuerSigningKey = false,
                ValidIssuer = builder.Configuration["Jwt:Issuer"],
                ValidAudience = builder.Configuration["Jwt:Audience"],
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:key"] ?? ""))
        });

        builder.Services.AddHttpContextAccessor();

        builder.Services.AddSpaStaticFiles(configuration => configuration.RootPath = "wwwroot");

        builder.WebHost.ConfigureKestrel((context,options) => 
        {
            // how to generate a https certificate run these two commands with your info.
            // mkcert <spaced apart addresses>
            // openssl pkcs12 -export -out <mydomains>.pfx -inkey <example.com+5-key>.pem -in <example.com+5>.pem 
            // run mkcert -install to audomaically install the certificate
    
            options.ListenLocalhost(5200, listenOptions => listenOptions.UseHttps("nethost.pfx", "password"));
            options.Listen(System.Net.IPAddress.Parse("192.168.1.212"), 5200, listenOptions => listenOptions.UseHttps("nethost.pfx", "password"));
        });

        // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen(c=>{
            c.AddSecurityDefinition("oauth2", new OpenApiSecurityScheme {
                Description = "Example Value: bearer {token}",
                In =ParameterLocation.Header,
                Name ="Authorization",
                Type = SecuritySchemeType.ApiKey
            });

            c.OperationFilter<SecurityRequirementsOperationFilter>();
            
        });

        var app = builder.Build();

        if (app.Environment.IsDevelopment()) {
            app.UseSwagger();
            app.UseSwaggerUI();
            app.UseDeveloperExceptionPage();
        }


        app.UseHttpsRedirection();

        string path;

            path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot");
        Console.WriteLine($"Current Path: {path}");
        app.UseStaticFiles(new StaticFileOptions 
        {
            FileProvider = new PhysicalFileProvider(path),
        });

        app.UseRouting(); // Ensure UseRouting is called before UseEndpoints

        app.UseAuthentication();
        app.UseAuthorization();


        // don't change this
        #pragma warning disable ASP0014
        app.UseEndpoints(endpoints => 
        {
            endpoints.MapDefaultControllerRoute();
        });

        app.UseSpaStaticFiles();

        app.UseSpa(spa => 
        {
            if (app.Environment.IsDevelopment()) {
                spa.UseProxyToSpaDevelopmentServer("http://localhost:4200");
            } else {

                spa.Options.DefaultPage = "/browser/index.html";
                spa.Options.DefaultPageStaticFileOptions = new StaticFileOptions 
                {
                    FileProvider = new PhysicalFileProvider(path),
                };
            }
        });

        app.Run();
        
    }
}
