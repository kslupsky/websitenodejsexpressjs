const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

class SpeakerService {
    constructor(datafile) {
        this.datafile = datafile;
    }

    async getNames() {
        const data = await this.getData();
        if(!data) return null;
        return data.map((speaker) => {
            return { name: speaker.name, shortname: speaker.shortname };
        });
    }

    async getData() {
        const data = await readFile(this.datafile, 'utf8');
        if(!data) return [];
        return JSON.parse(data).speakers;
    }
}

module.exports = SpeakerService;