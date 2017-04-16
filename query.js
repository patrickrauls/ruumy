const environment = process.env.ENV || 'development',
    config = require('./knexfile')[environment],
    knex = require('knex')(config);


module.exports = {
    create_account(account) {
        return knex('account')
            .insert(account)
            .returning('*');
    },
    read_account(id) {
        return knex
            .select('*')
            .from('account')
            .where(id);
    },
    update_account(account) {
        return knex('account')
            .update(account)
            .where('id', account.id)
            .returning('*');
    },
    delete_account(id) {
        return knex('account')
            .where(id)
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
            .insert(cart)
            .returning('*');
    },
    read_cart(id) {
        return knex
            .select('*')
            .from('cart')
            .where(id);
    },
    update_cart(cart) {
        return knex('cart')
            .update(cart)
            .where('id', cart.id)
            .returning('*');
    },
    delete_cart(id) {
        return knex('cart')
            .where(id)
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
            .insert(inventory)
            .returning('*');
    },
    read_inventory(id) {
        return knex
            .select('*')
            .from('inventory')
            .where(id);
    },
    update_inventory(inventory) {
        return knex('inventory')
            .update(inventory)
            .where('id', inventory.id)
            .returning('*');
    },
    delete_inventory(id) {
        return knex('inventory')
            .where(id)
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
            .insert(location)
            .returning('*');
    },
    read_location(id) {
        return knex
            .select('*')
            .from('location')
            .where(id);
    },
    update_location(location) {
        return knex('location')
            .update(location)
            .where('id', location.id)
            .returning('*');
    },
    delete_location(id) {
        return knex('location')
            .where(id)
            .del()
            .returning('*');
    },
    list_locations() {
        return knex
            .select('*')
            .from('location')
    },
    create_location_type(title) {
        return knex('location_type')
            .insert(title)
            .returning('*');
    },
    list_location_types() {
        return knex
            .select('*')
            .from('location_type')
    },
    create_product(product) {
        return knex('product')
            .insert(product)
            .returning('*');
    },
    read_product(id) {
        return knex
            .select('*')
            .from('product')
            .where(id);
    },
    update_product(product) {
        return knex('product')
            .update(product)
            .where('id', product.id)
            .returning('*');
    },
    delete_product(id) {
        return knex('product')
            .where(id)
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
            .insert(user)
            .returning('*');
    },
    read_user(id) {
        return knex
            .select('*')
            .from('user')
            .where(id);
    },
    update_user(user) {
        return knex('user')
            .update(user)
            .where('id', user.id)
            .returning('*');
    },
    delete_user(id) {
        return knex('user')
            .where(id)
            .del()
            .returning('*');
    },
    list_users() {
        return knex
            .select('*')
            .from('user')
    }

}