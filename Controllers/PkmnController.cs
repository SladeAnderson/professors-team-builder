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
    public class PkmnController : ControllerBase
    {
        private readonly IPokemonService PkmnService;
        
        public PkmnController(IPokemonService pokemonService) 
        {
            this.PkmnService = pokemonService;
        }

        [HttpPost("{summary}")]
        public async Task<IActionResult> GetAllPkmn(PkmnSummary summary)
        {
            var HalfPkmns = await PkmnService.GetAllHalfPkmn(summary);

            if (HalfPkmns != null)
            {
                return Ok(HalfPkmns);
            }
            return NotFound();
        }

        [HttpPost("{name}")]
        public async Task<IActionResult> GetByName(string name)
        {
            var HalfPkmn = await PkmnService.GetHalfPkmnByName(name);

            if (HalfPkmn != null)
            {
                return Ok(HalfPkmn);
            }
            return NotFound();
        }

        [HttpPost("{id}")]
        public async Task<IActionResult> GetById(int id)
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