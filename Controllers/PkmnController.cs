using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using professorsTeamBuilder.models;
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
        public async Task<IActionResult> GetAllPkmn([FromBody] PkmnSummary summary)
        {
            Console.WriteLine("------------------------------------");
            var halfPkmns = await PkmnService.GetAllHalfPkmn(summary);

            Console.WriteLine("fetching...");

            return halfPkmns != null ? Ok(halfPkmns) : NotFound();
        }

        [HttpPost("{name}")]
        public async Task<IActionResult> GetByName([FromBody] string name)
        {
            var HalfPkmn = await PkmnService.GetHalfPkmnByName(name);

            if (HalfPkmn != null)
            {
                return Ok(HalfPkmn);
            }
            return NotFound();
        }

        [HttpPost("{id}")]
        public async Task<IActionResult> GetById([FromBody] int id)
        {
            var HalfPkmn = await PkmnService.GetHalfPkmnById(id);

            if (HalfPkmn != null)
            {
                return Ok(HalfPkmn);
            }
            return NotFound();
        }

        
    }
}