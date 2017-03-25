const log = console.log;

module.exports = {
    create(object) {
        log('create: ', object)
        return new Promise((resolve, reject) => {
            resolve('I promise');
        });
    },
    read(id) {
        log('read: ', id)
        return new Promise((resolve, reject) => {
            resolve('I promise');
        });
    },
    update(object) {
        log('update: ', object)
        return new Promise((resolve, reject) => {
            resolve('I promise');
        });
    },
    delete(id) {
        log('delete: ', id)
        return new Promise((resolve, reject) => {
            resolve('I promise');
        });
    }
}
