const environment = process.env.ENV || 'development',
    config = require('./knexfile')[environment],
    knex = require('knex')(config);


module.exports = {
    create_account(account) {
        return knex('account')
            .insert({
                'id': account.id,
                'super': account.super
            })
            .returning('*');
    },
    read_account(id) {
        return knex
            .select('*')
            .from('account')
            .where('id', id);
    },
    update_account(account) {
        return knex('account')
            .update({
                'id': account.id,
                'super': account.super
            })
            .where('id', account.id)
            .returning('*');
    },
    delete_account(id) {
        return knex('account')
            .where('id', id)
            .del()
            .returning('*');
    },
    list_accounts() {
        return knex
            .select('*')
            .from('account')
    },
    create_cart(cart) {
        return knex('cart')
            .insert({

            })
            .returning('*');
    },
    read_cart(id) {
        return knex
            .select('*')
            .from('cart')
            .where('id', id);
    },
    update_cart(cart) {
        return knex('cart')
            .update({

            })
            .where('id', cart.id)
            .returning('*');
    },
    delete_cart(id) {
        return knex('cart')
            .where('id', id)
            .del()
            .returning('*');
    },
    list_carts() {
        return knex
            .select('*')
            .from('cart')
    },
    create_inventory(inventory) {
        return knex('inventory')
            .insert({

            })
            .returning('*');
    },
    read_inventory(id) {
        return knex
            .select('*')
            .from('inventory')
            .where('id', id);
    },
    update_inventory(inventory) {
        return knex('inventory')
            .update({

            })
            .where('id', inventory.id)
            .returning('*');
    },
    delete_inventory(id) {
        return knex('inventory')
            .where('id', id)
            .del()
            .returning('*');
    },
    list_inventories() {
        return knex
            .select('*')
            .from('inventory')
    },
    create_location(location) {
        return knex('location')
            .insert({

            })
            .returning('*');
    },
    read_location(id) {
        return knex
            .select('*')
            .from('location')
            .where('id', id);
    },
    update_location(location) {
        return knex('location')
            .update({

            })
            .where('id', location.id)
            .returning('*');
    },
    delete_location(id) {
        return knex('location')
            .where('id', id)
            .del()
            .returning('*');
    },
    list_locations() {
        return knex
            .select('*')
            .from('location')
    },
    create_product(product) {
        return knex('product')
            .insert({

            })
            .returning('*');
    },
    read_product(id) {
        return knex
            .select('*')
            .from('product')
            .where('id', id);
    },
    update_product(product) {
        return knex('product')
            .update({

            })
            .where('id', product.id)
            .returning('*');
    },
    delete_product(id) {
        return knex('product')
            .where('id', id)
            .del()
            .returning('*');
    },
    list_products() {
        return knex
            .select('*')
            .from('product')
    },
    create_user(user) {
        return knex('user')
            .insert({
                firstname: user.firstname,
                lastname: user.lastname,
                phone: user.phone,
                email: user.email
            })
            .returning('*');
    },
    read_user(id) {
        return knex
            .select('*')
            .from('user')
            .where('id', id);
    },
    update_user(user) {
        return knex('user')
            .update({

            })
            .where('id', user.id)
            .returning('*');
    },
    delete_user(id) {
        return knex('user')
            .where('id', id)
            .del()
            .returning('*');
    },
    list_users() {
        return knex
            .select('*')
            .from('user')
    }

}