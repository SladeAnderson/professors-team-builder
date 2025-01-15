﻿using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.SpaServices;
using Microsoft.EntityFrameworkCore;
using MongoDB.Driver;
using MongoDB.Bson;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.AspNetCore.Identity;
using Swashbuckle.AspNetCore.Filters;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.FileProviders;
using Microsoft.OpenApi.Models;


namespace professorsTeamBuilder;

class Program
{
    static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        //--------------- Add service to the container. ---------------
        builder.Services.AddControllers();

        





        // ------ Database Stuff -----

        
        var location = "localDefualt";

        var connString = builder.Configuration.GetConnectionString(location);
        
        
        if (connString == null) {
            Console.WriteLine("you must set your 'MONGODB_URI' environment variable. To learn how to set it, see https://www.mongodb.com/docs/drivers/csharp/current/quick-start/#set-your-connection-string");
            Environment.Exit(0);
        }

        var client = new MongoClient(connString);

        var pokemonTeamTool = client.GetDatabase("pokemon_Team_Builder").GetCollection<BsonDocument>("pokemonTeamTool");



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
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]))
        });




        // ---------------------------

        builder.Services.AddHttpContextAccessor();

        builder.WebHost.ConfigureServices(services => 
        {
            services.AddSpaStaticFiles(configuration => 
            {
                configuration.RootPath = "wwwroot";
            });
        });

        builder.WebHost.ConfigureKestrel((context,options) => 
        {
            // how to generate a https certificate run these two commands with your info.
            // mkcert <spaced apart addresses>
            // openssl pkcs12 -export -out <mydomains>.pfx -inkey <example.com+5-key>.pem -in <example.com+5>.pem 
    
            // options.ListenLocalhost(5000, listenOptions =>
            // {
            //     listenOptions.UseHttps("nethost.pfx", "password");
            // });
            // options.Listen(System.Net.IPAddress.Parse("192.168.1.100"), 5000, listenOptions =>
            // {
            //     listenOptions.UseHttps("nethost.pfx", "password");
            // });
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

        Console.WriteLine("Current Path: ", path);

        app.UseStaticFiles(new StaticFileOptions 
        {
            FileProvider = new PhysicalFileProvider(path),
        });

        app.UseRouting();

        app.UseAuthentication();
        app.UseAuthorization();



        app.UseEndpoints(endpoints => 
        {
            endpoints.MapDefaultControllerRoute();
        });

        app.UseSpaStaticFiles();

        app.UseSpa(spa => 
        {
            spa.Options.SourcePath = "client";
            
            if (app.Environment.IsDevelopment()) {
                spa.UseAngularCliServer(path);
            } else {
                spa.Options.DefaultPage = "/app/index.html";
                spa.Options.DefaultPageStaticFileOptions = new StaticFileOptions 
                {
                    FileProvider = new PhysicalFileProvider(path),
                };
            }
        });

        app.Run();
        
    }
}
