let browser = mp.browsers.new('package://scoreboard/html/index.html');
browser.active = false;

const KEY_CODE = 0x72; // F3

mp.keys.bind(KEY_CODE, true, () => {
    browser.active = true;
});

mp.keys.bind(KEY_CODE, false, () => {
    browser.active = false;
});

mp.events.add('scoreboardUpdate', (players) => {
    browser.execute(`listClear();`);
    players.forEach(function(player) {
        browser.execute(`listAddPlayer(${player.id}, \'${player.name}\', ${player.ping});`);
    })
});

