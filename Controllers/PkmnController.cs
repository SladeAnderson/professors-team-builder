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
        public async Task<IActionResult> GetAllPkmn([FromBody] List<LinkDTO> summary)
        {
            if (summary == null) {
                Console.WriteLine("You need A summary!");
                return BadRequest("You need a summary");
            }
            
            Console.WriteLine("------------------------------------");
            var halfPkmns = await PkmnService.GetAllHalfPkmn(summary);

            Console.WriteLine("fetching...");

            return halfPkmns != null ? Ok(halfPkmns) : NotFound();
        }

        [HttpPost]
        public IActionResult GetByName([FromBody] string name)
        {
            var HalfPkmn = PkmnService.GetHalfPkmnByName(name);

            if (HalfPkmn != null)
            {
                return Ok(HalfPkmn);
            }
            return NotFound();
        }
        
    }
}