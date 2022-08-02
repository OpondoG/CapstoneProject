const speakers = [{
        name: 'Okonjo Gilbert',
        profile: 'Group Chief Customer Officer',
        image: './assets/speaker_001.png',
        description: 'President of consumer safety worldwide. Has over 10 years of experience leading customer experience teams.',
    },
    {
        name: 'David Ogola',
        profile: 'Eden CEO',
        image: './assets/speaker_002.png',
        description: 'A true leader in his generation. Has successfuly started a media house from being a photographis. He hosts major events in the continent courtesy of his visionary skills.',
    },
    {
        name: 'Mathews Ogada',
        profile: 'Group CSO',
        image: './assets/speaker_003.png',
        description: 'Has successfuly lead sales teams in his 15 years of career. He is exceptionally good at closing deals and has seen expansion of his company to open banches beyound africa.',
    },
    {
        name: 'Okonjo Tony',
        profile: 'Yamagata Motors CEO',
        image: './assets/speaker_004.png',
        description: 'A visionary leader in the motor industry. He has build his successful company from scratch and now enjoys being the leading importer of vehicles in Africa.',
    },
    {
        name: 'Brian KipKoech',
        profile: 'Chief Marketing Officer',
        image: './assets/speaker_005.png',
        description: 'He has a wealth of experience in the  social-media marketing. He has singlehandedly led the brand awareness of his comapny and they are the leaders in the banking industry in Kenya',
    },
    {
        name: 'Stanley Chinedu',
        profile: 'Global Chief Technology Officer',
        image: './assets/speaker_006.png',
        description: 'The 2020 winner of the most coveted EastAfrican HisNovation award. Global tech leader in the banking industry.',
    },
];

speakers.forEach((element) => {
    const speakers = document.querySelector('.grid');
    const speaker = document.createElement('div');
    speaker.innerHTML = `
      <div class="major"
        <div class="parent">
        <img src="./assets/chessBoard.svg" class="dev-bg-tiles" alt="chess" />
          <img src="${element.image}" alt="" class="developer-image" />
        </div>
        <div class="developer-info">
          <h3 class="developer-name">${element.name}</h3>
          <p class="developer-followers">${element.profile}</p>
          <hr class="divider" />
          <p class="developer-details">
            ${element.description}
          </p>
        </div>
      </div>
    </div>`;

    speakers.appendChild(speaker);
    speaker.classList.add('developer');
});