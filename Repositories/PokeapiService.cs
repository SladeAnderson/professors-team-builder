using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using professorsTeamBuilder.models.Entities;

namespace professorsTeamBuilder.Repositories
{
    public class PokeapiService(HttpClient http)
    {

        public async Task<HalfPokemonEntity> GetPokemon(string name) 
        {
            var BaseAddress = http.BaseAddress = new Uri("https://pokeapi.co/api/v2/pokemon/");
            var res = await http.GetAsync($"{BaseAddress}/{name}");
            var errMsg = res.EnsureSuccessStatusCode().;

            HalfPokemonEntity? pokemon = await res.Content.ReadFromJsonAsync<HalfPokemonEntity>();

            if (pokemon != null) {
                Console.WriteLine($"Found Pkmn! {pokemon.Name}\n ID: {pokemon.Id} Status:{res.StatusCode}");
                return pokemon;
            } 
            
            throw new HttpRequestException(errMsg.ToString());
        } 

    }
}