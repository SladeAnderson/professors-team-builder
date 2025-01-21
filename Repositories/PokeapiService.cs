using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using professorsTeamBuilder.models.Entities;

namespace professorsTeamBuilder.Repositories
{
    public class PokeapiService(HttpClient http) : IPokeapiService
    {

        public async Task<HalfPokemonEntity> GetPokemon(string name) 
        {
            var BaseAddress = new Uri("https://pokeapi.co/api/v2/pokemon/");
            http.BaseAddress = BaseAddress;
            var res = await http.GetAsync($"{BaseAddress}/{name}");
            res.EnsureSuccessStatusCode();

            HalfPokemonEntity? pokemon = await res.Content.ReadFromJsonAsync<HalfPokemonEntity>();

            if (pokemon != null) {
                Console.WriteLine($"Found Pkmn! {pokemon.Name}\n ID: {pokemon.Id} Status:{res.StatusCode}");
                return pokemon;
            } 
            
            return new HalfPokemonEntity()
            {
                Name = "",
            };
        } 

        public async Task<HalfPokemonEntity> GetPokemon(int id) 
        {
            var BaseAddress = new Uri("https://pokeapi.co/api/v2/pokemon/");
            http.BaseAddress = BaseAddress;
            var res = await http.GetAsync($"{BaseAddress}/{id}");
            res.EnsureSuccessStatusCode();

            HalfPokemonEntity? pokemon = await res.Content.ReadFromJsonAsync<HalfPokemonEntity>();

            if (pokemon != null) {
                Console.WriteLine($"Found Pkmn! {pokemon.Name}\n ID: {pokemon.Id} Status:{res.StatusCode}");
                return pokemon;
            } 
            
            return new HalfPokemonEntity()
            {
                Name = "",
            };
        } 

        
        //  add the other info calles later




    }

    public interface IPokeapiService
    {
        public Task<HalfPokemonEntity> GetPokemon(string name);
        public Task<HalfPokemonEntity> GetPokemon(int id);

        // add the other info calls later!
    }
}