import { Validator } from '../nicknames';

test('Validator', () => {
    let nicknames = {
        "username": true,
        "_username": false,
        "username_": false,
        "123username": false,
        "user-name": true,
        "user1234": false,
        "user123": false,
        "user--name": true,
        "user_name": true,
    };

    Object.keys(nicknames).forEach((nickname) => {
        expect(new Validator(nickname).validateUsername()).toBe(nicknames[nickname]);
    });
});
