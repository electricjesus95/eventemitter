const EventEmitter = require('../src/EventEmitter');

describe('Event Emitter Tests', () => {

    describe('Test "trigger" method', () => {

        it('Trigger event without listeners', () => {

            const emitter = new EventEmitter();
            emitter.trigger('some-event-name');
        });

    });

});
