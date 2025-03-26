using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using professorsTeamBuilder.models;
using professorsTeamBuilder.models.DTO;
using professorsTeamBuilder.Repositories;

namespace professorsTeamBuilder.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class Pkmn : ControllerBase
    {
        private readonly IPokemonService PkmnService;
        
        public Pkmn(IPokemonService pokemonService) 
        {
            this.PkmnService = pokemonService;
        }

        [HttpPost]
        public async Task<IActionResult> GetAllPkmn()
        {
            var pkmns = new List<HalfPokemonDTO>();
            Console.WriteLine("------------------------------------");
            try
            {
                pkmns = await PkmnService.GetAllHalfPkmn();
            }
            catch (TimeoutException err) {
                Console.WriteLine($"Could not fetch, error: {err}");
                throw;
            }

            return pkmns != null ? Ok(pkmns) : NotFound();
        }

        [HttpPost]
        public IActionResult GetByName([FromBody] string name)
        {
            HalfPokemonDTO? pkmn = new(){Name = ""};

            try
            {
                pkmn = PkmnService.GetHalfPkmnByName(name);
            }
            catch (TimeoutException err) {
                Console.WriteLine($"Could not fetch, error: {err}");
                throw;
            }
            catch (MissingFieldException err) {
                Console.WriteLine($"Please enter a name, error: {err} ");
                throw;
            }

            return pkmn != null ? Ok(pkmn) : NotFound();
        }

        [HttpPost]
        public IActionResult GetById([FromBody] int id)
        {
            HalfPokemonDTO? pkmn = new(){Name = ""};

            try
            {
                pkmn = PkmnService.GetHalfPkmnById(id);
            }
            catch (TimeoutException err) {
                Console.WriteLine($"Could not fetch, error: {err}");
                throw;
            }
            catch (MissingFieldException err) {
                Console.WriteLine($"Please enter a id, error: {err} ");
                throw;
            }

            return pkmn != null ? Ok(pkmn) : NotFound();
        }
        
    }
}