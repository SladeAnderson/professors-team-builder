using professorsTeamBuilder.models.DTO;
using professorsTeamBuilder.models.Entities;

namespace professorsTeamBuilder.Tools
{
    public class PkmnInfoMapper
    {



    }



    public interface IPkmnInfoMapper
    {
        // abilities
        List<AbilityDTO> MapInfo(List<AbilityEntity> abilitys);
        List<AbilityEntity> MapInfo(List<AbilityDTO> abilitys);
        // Links
        


        // Game Indicies



        // Held Items



        // Moves



        // Past Types



        // Sprites Image Urls Object



        // Stats



        // Types
    }
}