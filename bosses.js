const bosses = [
  {
  name: 'Broken Vessel',
  image:
    'https://vignette.wikia.nocookie.net/hollowknight/images/e/e6/Broken_Vessel_Icon.png/revision/latest?cb=20170511203343',
  location: 'Ancient Basin',
  category: 'boss'
},
{
  name: 'Brooding Mawlek',
  image:
    'https://vignette.wikia.nocookie.net/hollowknight/images/6/6f/Brooding_Mawlek_Icon.png/revision/latest?cb=20170511203411',
  location: 'Forgotten Crossroads',
  category: 'boss'
},
{
  name: 'Brothers Oro & Mato',
  image:
    'https://vignette.wikia.nocookie.net/hollowknight/images/6/63/Brothers_Oro_%26_Mato_Icon.png/revision/latest/scale-to-width-down/150?cb=20180827013602',
  location: 'Godhome',
  category: 'boss'
},
{
  name: 'The Collector',
  image:
    'https://vignette.wikia.nocookie.net/hollowknight/images/9/9e/The_Collector_Icon.png/revision/latest/scale-to-width-down/150?cb=20181005213011',
  location: 'Tower of Love',
  category: 'boss'
},
{
  name: 'Crystal Guardian',
  image:
    'https://vignette.wikia.nocookie.net/hollowknight/images/a/af/Crystal_Guardian_Icon.png/revision/latest/scale-to-width-down/150?cb=20181005210132',
  location: 'Crystal Peak',
  category: 'boss'
},
{
  name: 'Dung Defender',
  image:
    'https://vignette.wikia.nocookie.net/hollowknight/images/b/bd/Dung_Defender_Icon.png/revision/latest?cb=20170511203423',
  location: 'Royal Waterways',
  category: 'boss'
},
{
  name: 'False Knight',
  image:
    'https://vignette.wikia.nocookie.net/hollowknight/images/c/c2/False_Knight_Icon.png/revision/latest/scale-to-width-down/150?cb=20181005213247',
  location: 'Forgotten Crossroads',
  category: 'boss'
},
{
  name: 'Flukemarm',
  image:
    'https://vignette.wikia.nocookie.net/hollowknight/images/6/61/Flukemarm_Icon.png/revision/latest/scale-to-width-down/150?cb=20181005212623',
  location: 'Royal Waterways',
  category: 'boss'
},
{
  name: 'God Tamer',
  image:
    'https://vignette.wikia.nocookie.net/hollowknight/images/1/19/God_Tamer_Icon.png/revision/latest/scale-to-width-down/150?cb=20181005211000',
  location: 'Trial of the Fool',
  category: 'boss'
},
{
  name: 'Great Nailsage Sly',
  image:
    'https://vignette.wikia.nocookie.net/hollowknight/images/5/58/Great_Nailsage_Sly_Icon.png/revision/latest/scale-to-width-down/149?cb=20181005211234',
  location: 'Godhome',
  category: 'boss'
},
{
  name: 'Grimm',
  image:
    'https://vignette.wikia.nocookie.net/hollowknight/images/2/23/Troupe_Master_Grimm_Icon.png/revision/latest/scale-to-width-down/150?cb=20181005211608',
  location: 'Dirtmouth',
  category: 'boss'
},
{
  name: 'Gruz Mother',
  image:
    'https://vignette.wikia.nocookie.net/hollowknight/images/e/e2/Gruz_Mother_Icon.png/revision/latest/scale-to-width-down/150?cb=20181005205907',
  location: 'Forgotten Crossroads',
  category: 'boss'
},
{
  name: 'Hive Knight',
  image:
    'https://vignette.wikia.nocookie.net/hollowknight/images/5/5f/Hive_Knight_Icon.png/revision/latest/scale-to-width-down/149?cb=20181005210625',
  location: 'The Hive',
  category: 'boss'
},
{
  name: 'Hollow Knight',
  image:
    'https://vignette.wikia.nocookie.net/hollowknight/images/2/24/The_Hollow_Knight_Icon.png/revision/latest/scale-to-width-down/150?cb=20181005212233',
  location: 'Temple of the Black Egg',
  category: 'boss'
},
{
  name: 'Hornet Protector',
  image:
    'https://vignette.wikia.nocookie.net/hollowknight/images/e/e9/Hornet_Protector_Icon.png/revision/latest/scale-to-width-down/150?cb=20181005204201',
  location: 'Greenpath',
  category: 'boss'
},
{
  name: 'Mantis Lords',
  image:
    'https://vignette.wikia.nocookie.net/hollowknight/images/b/b2/Mantis_Lords_Icon.png/revision/latest?cb=20170511203618',
  location: 'Mantis Village',
  category: 'boss'
},
{
  name: 'Massive Moss Charger',
  image:
    'https://vignette.wikia.nocookie.net/hollowknight/images/3/3d/Massive_Moss_Charger_Icon.png/revision/latest/scale-to-width-down/150?cb=20180827013444',
  location: 'Greenpath',
  category: 'boss'
},
{
  name: 'Nosk',
  image:
    'https://vignette.wikia.nocookie.net/hollowknight/images/8/8a/Nosk_Icon.png/revision/latest?cb=20170511203627',
  location: 'Deepnest',
  category: 'boss'
},
{
  name: 'Oblobble',
  image:
    'https://vignette.wikia.nocookie.net/hollowknight/images/6/66/Oblobble_Icon.png/revision/latest/scale-to-width-down/150?cb=20181005204959',
  location: 'Trial of the Conqueror',
  category: 'boss'
},
{
  name: 'Paintmaster Sheo',
  image:
    'https://vignette.wikia.nocookie.net/hollowknight/images/2/2f/Paintmaster_Sheo_Icon.png/revision/latest/scale-to-width-down/150?cb=20180827013538',
  location: 'Pantheon of the Artist',
  category: 'boss'
},
{
  name: 'Radiance',
  image:
    'https://vignette.wikia.nocookie.net/hollowknight/images/b/b8/Radiance_Icon.png/revision/latest/scale-to-width-down/150?cb=20181005204741',
  location: 'Temple of the Black Egg',
  category: 'boss'
},
{
  name: 'Soul Master',
  image:
    'https://vignette.wikia.nocookie.net/hollowknight/images/e/e9/Soul_Master_Icon.png/revision/latest/scale-to-width-down/150?cb=20181005205259',
  location: 'Soul Sanctum',
  category: 'boss'
},
{
  name: 'Soul Warrior',
  image:
    'https://vignette.wikia.nocookie.net/hollowknight/images/0/0c/Soul_Warrior_Icon.png/revision/latest/scale-to-width-down/150?cb=20181005211941',
  location: 'Soul Sanctum',
  category: 'boss'
},
{
  name: 'Traitor Lord',
  image:
    'https://vignette.wikia.nocookie.net/hollowknight/images/1/15/Traitor_Lord_Icon.png/revision/latest/scale-to-width-down/150?cb=20181005205522',
  location: 'Queen\'s Gardens',
  category: 'boss'
},
{
  name: 'Uumuu',
  image:
    'https://vignette.wikia.nocookie.net/hollowknight/images/d/d9/Uumuu_Icon.png/revision/latest?cb=20170511210950',
  location: 'Teacher\'s Archives',
  category: 'boss'
},
{
  name: 'Vengefly King',
  image:
    'https://vignette.wikia.nocookie.net/hollowknight/images/0/08/Vengefly_King_Icon.png/revision/latest/scale-to-width-down/150?cb=20180827013512',
  location: 'Greenpath',
  category: 'boss'
},
{
  name: 'Watcher Knight',
  image:
    'https://vignette.wikia.nocookie.net/hollowknight/images/b/b3/Watcher_Knight_Icon.png/revision/latest/scale-to-width-down/150?cb=20181005211823',
  location: 'Watcher\'s Spire',
  category: 'boss'
},
{
  name: 'Zote the Mighty',
  image:
    'https://vignette.wikia.nocookie.net/hollowknight/images/1/12/Zote_Circle-2.png/revision/latest?cb=20180831184143',
  location: 'City of Tears',
  category: 'boss'
},
{
  name: 'Elder Hu',
  image:
    'https://vignette.wikia.nocookie.net/hollowknight/images/6/64/Elder_Hu_Icon.png/revision/latest/scale-to-width-down/145?cb=20181211041949',
  location: 'Fungal Wastes',
  category: 'boss'
},
{
  name: 'Galien',
  image:
    'https://vignette.wikia.nocookie.net/hollowknight/images/6/6f/Galien_Icon.png/revision/latest?cb=20181005214202',
  location: 'Deepnest',
  category: 'boss'
},
{
  name: 'Gorb',
  image:
    'https://vignette.wikia.nocookie.net/hollowknight/images/2/27/Gorb_Icon.png/revision/latest?cb=20181005214152',
  location: 'Howling Cliffs',
  category: 'boss'
},
{
  name: 'Markoth',
  image:
    'https://vignette.wikia.nocookie.net/hollowknight/images/4/44/Markoth_Icon.png/revision/latest?cb=20170511213232',
  location: 'Kingdom\'s Edge',
  category: 'boss'
},
{
  name: 'Marmu',
  image:
    'https://vignette.wikia.nocookie.net/hollowknight/images/1/10/Marmu_Icon.png/revision/latest?cb=20170511213232',
  location: 'Queen\'s Gardens',
  category: 'boss'
},
{
  name: 'No Eyes',
  image:
    'https://vignette.wikia.nocookie.net/hollowknight/images/7/79/No_Eyes_Icon.png/revision/latest?cb=20170511213232',
  location: 'Stone Sanctuary',
  category: 'boss'
},
{
  name: 'Xero',
  image:
    'https://vignette.wikia.nocookie.net/hollowknight/images/0/00/Xero_Icon.png/revision/latest?cb=20170511213232',
  location: 'Resting Grounds',
  category: 'boss'
},
{
  name: 'Absolute Radiance',
  image:
    'https://vignette.wikia.nocookie.net/hollowknight/images/6/68/Absolute_Radiance_Icon.png/revision/latest/scale-to-width-down/140?cb=20180827013551',
  location: 'Godhome',
  category: 'boss'
},
{
  name: 'Enraged Guardian',
  image:
    'https://vignette.wikia.nocookie.net/hollowknight/images/5/54/Enraged_Guardian_Icon.png/revision/latest/scale-to-width-down/140?cb=20181005220902',
  location: 'Crystal Peak',
  category: 'boss'
},
{
  name: 'Failed Champion',
  image:
    'https://vignette.wikia.nocookie.net/hollowknight/images/e/e7/Failed_Champion_Icon.png/revision/latest/scale-to-width-down/140?cb=20181005221524',
  location: 'Forgotten Crossroads',
  category: 'boss'
},
{
  name: 'Grey Prince Zote',
  image:
    'https://vignette.wikia.nocookie.net/hollowknight/images/8/81/Grey_Prince_Zote_Circle.png/revision/latest/scale-to-width-down/140?cb=20170810232902',
  location: 'Dirtmouth',
  category: 'boss'
},
{
  name: 'Hornet Sentinel',
  image:
    'https://vignette.wikia.nocookie.net/hollowknight/images/f/f9/Hornet_Sentinel_Icon.png/revision/latest/scale-to-width-down/149?cb=20181005221041',
  location: 'Kingdom\'s Edge',
  category: 'boss'
},
{
  name: 'Lost Kin',
  image:
    'https://vignette.wikia.nocookie.net/hollowknight/images/b/be/Lost_Kin_Icon.png/revision/latest/scale-to-width-down/150?cb=20181005221606',
  location: 'Ancient Basin',
  category: 'boss'
},
{
  name: 'Nightmare King',
  image:
    'https://vignette.wikia.nocookie.net/hollowknight/images/c/c3/Nightmare_King_Icon.png/revision/latest/scale-to-width-down/150?cb=20181005215902',
  location: 'Dirtmouth',
  category: 'boss'
},
{
  name: 'Pure Vessel',
  image:
    'https://vignette.wikia.nocookie.net/hollowknight/images/b/b1/Pure_Vessel_Icon.png/revision/latest/scale-to-width-down/150?cb=20180827013611',
  location: 'Godhome',
  category: 'boss'
},
{
  name: 'Sisters of Battle',
  image:
    'https://vignette.wikia.nocookie.net/hollowknight/images/e/e8/Sisters_of_Battle_Icon.png/revision/latest/scale-to-width-down/150?cb=20180827013525',
  location: 'Godhome',
  category: 'boss'
},
{
  name: 'Soul Tyrant',
  image:
    'https://vignette.wikia.nocookie.net/hollowknight/images/6/6b/Soul_Tyrant_Icon.png/revision/latest/scale-to-width-down/150?cb=20181005221302',
  location: 'Soul Sanctum',
  category: 'boss'
},
{
  name: 'White Defender',
  image:
    'https://vignette.wikia.nocookie.net/hollowknight/images/8/80/White_defender_circle_.png/revision/latest/scale-to-width-down/149?cb=20170810232928',
  location: 'Royal Waterways',
  category: 'boss'
},
{
  name: 'Winged Nosk',
  image:
    'https://vignette.wikia.nocookie.net/hollowknight/images/c/c1/Winged_Nosk_Icon.png/revision/latest/scale-to-width-down/150?cb=20180827013634',
  location: 'Godhome',
  category: 'boss'
}
]

const bossesFilter = bosses.filter(boss => {
  if (boss.location === 'White Palace') {
boss  }
})

console.log(bossesFilter);