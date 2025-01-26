using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using professorsTeamBuilder.models;
using professorsTeamBuilder.models.Entities;

namespace professorsTeamBuilder.Repositories
{
    public class PokeapiService : IPokeapiService
    {  
        private HttpClient http;
        public PokeapiService(HttpClient http)
        {
            http.Timeout = TimeSpan.FromMinutes(50);
            this.http = http;
        }  
        public async Task<HalfPokemonEntity> GetPokemon(string url) 
        {
            HalfPokemonEntity? pokemon;
            HttpResponseMessage? res;

            try {
                res = await http.GetAsync(url);
            } 
            catch (TimeoutException err) { 
                res = await http.GetAsync(url);
                Console.WriteLine(err);
                throw;
            }
            catch (System.Exception err) {
                Console.WriteLine(err);
                throw;
            }

            res.EnsureSuccessStatusCode();

            try {
                pokemon = await res.Content.ReadFromJsonAsync<HalfPokemonEntity>();
            } 
            catch (TimeoutException err) {
                pokemon = await res.Content.ReadFromJsonAsync<HalfPokemonEntity>();
                Console.WriteLine(err);
                throw;
            }
            catch (System.Exception err) {
                Console.WriteLine(err);
                throw;
            }

            res.Dispose();
            if (pokemon != null) {
                Console.WriteLine($"Found Pkmn! {pokemon.Name}\n ID: {pokemon.Id} Status:{res.StatusCode}");
                return pokemon;
            } 
            
            res.Dispose();
            return new HalfPokemonEntity()
            {
                Name = "",
            };
        
        } 

        public async Task<PkmnSummary> GetSumamry()
        {
            PkmnSummary? summary = new();
            HttpResponseMessage res = new();
            try
            {
                res = await http.GetAsync("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
            }
            catch (TimeoutException err)
            {
                Console.WriteLine(err);
                throw;
            }
            catch (System.Exception err)
            {
                Console.WriteLine(err);
                throw;
            }

            try
            {
                summary = await res.Content.ReadFromJsonAsync<PkmnSummary>();
            }
            catch (TimeoutException err)
            {
                Console.WriteLine(err);
                throw;
            }
            catch (System.Exception err)
            {
                Console.WriteLine(err);
                throw;
            }

            res.Dispose();
            return summary ?? new();
        }
        
        //  add the other info calles later




    }

    public interface IPokeapiService
    {
        public  Task<HalfPokemonEntity> GetPokemon(string url);
        public Task<PkmnSummary> GetSumamry();
    }
}