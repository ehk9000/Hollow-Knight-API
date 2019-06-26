const npcs = [
  {
    name: 'Confessor Jiji',
    image: 'https://vignette.wikia.nocookie.net/hollowknight/images/9/9f/Jiji_Circle.png/revision/latest/scale-to-width-down/150?cb=20170426185851',
    location: 'Dirtmouth'
  },
  {
    name: 'Isela',
    image:'https://vignette.wikia.nocookie.net/hollowknight/images/b/bb/Iselda_Circle.png/revision/latest/scale-to-width-down/150?cb=20170426185850', 
    location: 'Dirtmouth'
  },
  {
    name: 'Leg Eater',
    image: 'https://vignette.wikia.nocookie.net/hollowknight/images/3/32/Legeater_Circle.png/revision/latest/scale-to-width-down/150?cb=20170426185851',
    location: 'Fungal Wastes'
  },
  {
    name: 'Little Fool',
    image: 'https://vignette.wikia.nocookie.net/hollowknight/images/4/41/Little_Fool_Circle.png/revision/latest/scale-to-width-down/150?cb=20170426184417',
    location: 'Colosseum of Fools'
  },
  {
    name: 'Millibelle the Banker',
    image:'https://vignette.wikia.nocookie.net/hollowknight/images/a/a6/Millibelle_Circle.png/revision/latest/scale-to-width-down/150?cb=20170426184419',
    location: 'Fog Canyon'
  },
  {
    name: 'Nailsmith',
    image:'https://vignette.wikia.nocookie.net/hollowknight/images/4/48/Nailsmith_Circle.png/revision/latest/scale-to-width-down/150?cb=20170426184415',
    location: 'City of Tears'
  },
  {
    name: 'Relic Seeker Lemm',
    image: 'https://vignette.wikia.nocookie.net/hollowknight/images/1/14/Lemm_Circle.png/revision/latest/scale-to-width-down/150?cb=20170426184417',
    location: 'City of Tears'
  },
  {
    name: 'Charm Lover Salubra',
    image:'https://vignette.wikia.nocookie.net/hollowknight/images/2/27/Salubra_Circle.png/revision/latest/scale-to-width-down/150?cb=20170426184416',
    location: 'Forgotten Crossroads'
  }, 
  {
    name: 'Sly',
    image: 'https://vignette.wikia.nocookie.net/hollowknight/images/a/a5/Sly_Circle.png/revision/latest/scale-to-width-down/150?cb=20170426183929',
    location: 'Dirtmouth'
  },
  {
    name: 'Steel Soul Jinn',
    image:'https://vignette.wikia.nocookie.net/hollowknight/images/f/fd/Jinn_Circle.png/revision/latest/scale-to-width-down/150?cb=20170426183930',
    location: 'Dirtmouth'
  },
  {
    name: 'The Last Stag',
    image:'https://vignette.wikia.nocookie.net/hollowknight/images/f/f9/Stag_Circle.png/revision/latest/scale-to-width-down/150?cb=20170426185849',
    location: 'Stag Station'
  },
  {
    name: 'Tuk',
    image:'https://vignette.wikia.nocookie.net/hollowknight/images/6/64/Tuk_Circle.png/revision/latest/scale-to-width-down/150?cb=20170426183929',
    location: 'Royal Waterways'
  },
  {
    name: 'Nailmaster Mato',
    image:'https://vignette.wikia.nocookie.net/hollowknight/images/7/7b/Mato_Circle.png/revision/latest/scale-to-width-down/150?cb=20170426184415',
    location: 'Howling Cliffs'
  },
  {
    name: 'Nailmaster Oro',
    image:'https://vignette.wikia.nocookie.net/hollowknight/images/5/52/Oro_Circle.png/revision/latest/scale-to-width-down/150?cb=20170426184416',
    location: 'Kingdom\'s Edge'
  },
  {
    name: '',
    image:'https://vignette.wikia.nocookie.net/hollowknight/images/f/f2/Sheo_Circle.png/revision/latest/scale-to-width-down/150?cb=20170426184415',
    location: ''
  },
  {
    name: 'Nailmaster Sheo',
    image:'https://vignette.wikia.nocookie.net/hollowknight/images/2/28/Cloth_Circle-2.png/revision/latest/scale-to-width-down/150?cb=20180830235225',
    location: 'Greenpath'
  },
  {
    name: '',
    image: 'https://vignette.wikia.nocookie.net/hollowknight/images/c/c1/Cornifer_Circle.png/revision/latest/scale-to-width-down/150?cb=20170426185850',
    location: ''
  },
  {
    name: '',
    image:'https://vignette.wikia.nocookie.net/hollowknight/images/2/29/Hornet_Icon.png/revision/latest?cb=20170511203606',
    location: ''
  },
  {
    name: 'Mister Mushroom',
    image:'https://vignette.wikia.nocookie.net/hollowknight/images/f/fe/Mister_Mushroom_Circle.png/revision/latest/scale-to-width-down/150?cb=20170426190446',
    location: 'Fungal Wastes'
  },
  {
    name: 'Quirrel',
    image:'https://vignette.wikia.nocookie.net/hollowknight/images/0/03/Quirrel_Circle-2.png/revision/latest/scale-to-width-down/150?cb=20180830234915',
    location: 'Temple of the Black Egg'
  },
  {
    name: 'Tiso',
    image:'https://vignette.wikia.nocookie.net/hollowknight/images/9/92/Tiso_Circle.png/revision/latest/scale-to-width-down/150?cb=20170426183930',
    location: 'Colosseum of Fools'
  },
  {
    name: 'Zote the Mighty',
    image: 'https://vignette.wikia.nocookie.net/hollowknight/images/1/12/Zote_Circle-2.png/revision/latest?cb=20180831184143',
    location: 'Greenpath'
  },
  {
    name: 'Bretta',
    image:'https://vignette.wikia.nocookie.net/hollowknight/images/d/dd/Bretta_Circle.png/revision/latest/scale-to-width-down/150?cb=20170426185851',
    location: 'Dirtmouth'
  },
  {
    name: 'Dreamers',
    image:
      'https://vignette.wikia.nocookie.net/hollowknight/images/d/da/Dreamers_Circle.png/revision/latest/scale-to-width-down/150?cb=20180815175042',
    location: 'Resting Grounds'
  },
  {
    name: 'Grey Mourner',
    image:'https://vignette.wikia.nocookie.net/hollowknight/images/2/2b/Grey_Mourner_Circle.png/revision/latest/scale-to-width-down/150?cb=20170426185850',
    location: 'Resting Grounds'
  },
  {
    name: 'Hunter',
    image:'https://vignette.wikia.nocookie.net/hollowknight/images/9/96/Hunter_Circle.png/revision/latest/scale-to-width-down/150?cb=20170426190446',
    location: 'Greenpath'
  },
  {
    name: 'Seer',
    image:'https://vignette.wikia.nocookie.net/hollowknight/images/a/a6/Seer_Circle.png/revision/latest/scale-to-width-down/150?cb=20170426183929',
    location: 'Resting Grounds'
  },
  {
    name: 'Grubfather',
    image: 'https://vignette.wikia.nocookie.net/hollowknight/images/a/ad/Grubfather_Circle.png/revision/latest/scale-to-width-down/150?cb=20180815180043',
    location: 'Forgotten Crossroads'
  },
  {
    name: 'Bardoon',
    image:'https://vignette.wikia.nocookie.net/hollowknight/images/3/32/Bardoon_Circle.png/revision/latest/scale-to-width-down/150?cb=20170426185849',
    location: 'Kingdom\'s Edge'
  },
  {
    name: 'Distant Villagers',
    image:'https://vignette.wikia.nocookie.net/hollowknight/images/a/a7/Royal_Circle.png/revision/latest/scale-to-width-down/150?cb=20180831002917',
    location: 'Beast\'s Den'
  },
  {
    name: 'Dung Defender',
    image:'https://vignette.wikia.nocookie.net/hollowknight/images/5/57/Dung_Defender_Circle.png/revision/latest/scale-to-width-down/150?cb=20170426185850',
    location: 'Royal Waterways'
  },
  {
    name: 'Elderbug',
    image:'https://vignette.wikia.nocookie.net/hollowknight/images/5/5b/Elderbug_Circle-2.png/revision/latest/scale-to-width-down/150?cb=20180830235127',
    location: 'Dirtmouth'
  },
  {
    name: 'Eternal Emilitia',
    image:'https://vignette.wikia.nocookie.net/hollowknight/images/5/5d/Emlitia_Circle.png/revision/latest/scale-to-width-down/150?cb=20170426185852',
    location: 'City of Tears'
  },
  {
    name: 'Mask Maker',
    image:'https://vignette.wikia.nocookie.net/hollowknight/images/5/51/Mask_Maker_Circle.png/revision/latest/scale-to-width-down/150?cb=20170426185851',
    location: 'Deepnest'
  },
  {
    name: 'Midwife',
    image:'https://vignette.wikia.nocookie.net/hollowknight/images/2/2e/Midwife_Circle.png/revision/latest/scale-to-width-down/150?cb=20170426184418',
    location: 'Deepnest'
  },
  {
    name: 'Moss Prophet',
    image:'https://vignette.wikia.nocookie.net/hollowknight/images/5/5a/Moss_Prophet_Circle.png/revision/latest/scale-to-width-down/150?cb=20170426184415',
    location: 'Queen\'s Gardens'
  },
  {
    name: 'Myla',
    image:'https://vignette.wikia.nocookie.net/hollowknight/images/4/4f/Myla_Circle.png/revision/latest/scale-to-width-down/150?cb=20170426184415',
    location: 'Forgotten Crossroads'
  },
  {
    name: 'Menderbug',
    image:'https://vignette.wikia.nocookie.net/hollowknight/images/b/b0/Menderbug_Circle%282%29.png/revision/latest/scale-to-width-down/150?cb=20190313161409',
    location: 'Forgotten Crossroads'
  },
  {
    name: 'Snail Shaman',
    image:'https://vignette.wikia.nocookie.net/hollowknight/images/0/0c/Snail_Shaman_Circle.png/revision/latest/scale-to-width-down/150?cb=20170426183929',
    location: 'Ancestral Mound'
  },
  {
    name: 'The Pale King',
    image:'https://vignette.wikia.nocookie.net/hollowknight/images/9/91/King_Circle.png/revision/latest/scale-to-width-down/150?cb=20170426184418',
    location: 'White Palace '
  },
  {
    name: 'Unn',
    image:'https://vignette.wikia.nocookie.net/hollowknight/images/a/a2/Unn_Circle.png/revision/latest/scale-to-width-down/150?cb=20170426183929',
    location: 'Lake of Unn'
  },
  {
    name: 'Unnamed Moth',
    image:'https://vignette.wikia.nocookie.net/hollowknight/images/8/84/Unnamed_Moth_Circle.png/revision/latest/scale-to-width-down/150?cb=20180818172552',
    location: 'Shrine of Believers'
  },
  {
    name: 'The White Lady',
    image:'https://vignette.wikia.nocookie.net/hollowknight/images/9/9c/White_Lady_Circle.png/revision/latest/scale-to-width-down/150?cb=20170426190446',
    location: 'Queen\'s Gardens'
  },
  {
    name: 'Willoh',
    image:
      'https://vignette.wikia.nocookie.net/hollowknight/images/a/ad/Willoh_Circle.png/revision/latest/scale-to-width-down/150?cb=20170426183929',
    location: 'Queen\'s Station'
  },
  {
    name: 'Troupe Master Grimm',
    image:'https://vignette.wikia.nocookie.net/hollowknight/images/3/32/Grimm_Circle.png/revision/latest/scale-to-width-down/150?cb=20171029002401',
    location: 'Dirtmouth'
  },
  {
    name: 'Brumm',
    image:'https://vignette.wikia.nocookie.net/hollowknight/images/c/c0/Brumm_Circle.png/revision/latest/scale-to-width-down/150?cb=20171028232055',
    location: 'Dirtmouth'
  },
  {
    name: 'Divine',
    image:'https://vignette.wikia.nocookie.net/hollowknight/images/2/2c/Divine_Circle.png/revision/latest/scale-to-width-down/150?cb=20171028232123',
    location: 'Dirtmouth'
  },
  {
    name: 'Grimmsteed',
    image:'https://vignette.wikia.nocookie.net/hollowknight/images/a/a7/Grimmsteed.png/revision/latest/scale-to-width-down/150?cb=20180924005147',
    location: 'Dirtmouth'
  },
  {
    name: 'The Nightmare Heart',
    image:'https://vignette.wikia.nocookie.net/hollowknight/images/9/9e/Nightmare_Heart_Circle.png/revision/latest/scale-to-width-down/150?cb=20180831183402',
    location: 'Dirtmouth'
  },
  {
    name: 'Nymm',
    image:'https://vignette.wikia.nocookie.net/hollowknight/images/4/4c/Nymm_Circle.png/revision/latest/scale-to-width-down/150?cb=20171028232116',
    location: 'Dirtmouth'
  },
  {
    name: 'Fluke Hermit',
    image:'https://vignette.wikia.nocookie.net/hollowknight/images/3/3c/Fluke_Hermit_Circle.png/revision/latest/scale-to-width-down/150?cb=20180830231733',
    location: 'Junk Pit'
  },
  {
    name: 'Godseeker',
    image:'https://vignette.wikia.nocookie.net/hollowknight/images/0/0c/Godseeker_Cirle.png/revision/latest/scale-to-width-down/150?cb=20180830232006',
    location: 'Junk Pit'
  }
]