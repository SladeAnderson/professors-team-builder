using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using professorsTeamBuilder.models.DTO;

namespace professorsTeamBuilder.models
{
    public class PkmnSummary
    {
        public int Count { get; set; }
        public string? Next { get; set; }
        public string? Previous { get; set; }
        public List<LinkDTO> Results { get; set; } = [];
    }
}