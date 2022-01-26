'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Expenses', [{
      nameCategory: 'Продукты питания',
      createdAt: new Date,
      updatedAt: new Date,
    }], {});
    await queryInterface.bulkInsert('Expenses', [{
      nameCategory: 'Косметика',
      createdAt: new Date,
      updatedAt: new Date,
    }], {});
    await queryInterface.bulkInsert('Expenses', [{
      nameCategory: 'Машина',
      createdAt: new Date,
      updatedAt: new Date,
    }], {});
    await queryInterface.bulkInsert('Expenses', [{
      nameCategory: 'Такси',
      createdAt: new Date,
      updatedAt: new Date,
    }], {});
    await queryInterface.bulkInsert('Expenses', [{
      nameCategory: 'Общественный транспорт',
      createdAt: new Date,
      updatedAt: new Date,
    }], {});
    await queryInterface.bulkInsert('Expenses', [{
      nameCategory: 'Комунальные платежи',
      createdAt: new Date,
      updatedAt: new Date,
    }], {});
    await queryInterface.bulkInsert('Expenses', [{
      nameCategory: 'Кредит',
      createdAt: new Date,
      updatedAt: new Date,
    }], {});
    await queryInterface.bulkInsert('Expenses', [{
      nameCategory: 'Рестораны,бары',
      createdAt: new Date,
      updatedAt: new Date,
    }], {});
    await queryInterface.bulkInsert('Expenses', [{
      nameCategory: 'Прочие развлечения',
      createdAt: new Date,
      updatedAt: new Date,
    }], {});
    await queryInterface.bulkInsert('Expenses', [{
      nameCategory: 'Медицина',
      createdAt: new Date,
      updatedAt: new Date,
    }], {});
    await queryInterface.bulkInsert('Expenses', [{
      nameCategory: 'Мобильная связь и интернет',
      createdAt: new Date,
      updatedAt: new Date,
    }], {});
    await queryInterface.bulkInsert('Expenses', [{
      nameCategory: 'Одежда,обувь',
      createdAt: new Date,
      updatedAt: new Date,
    }], {});
    await queryInterface.bulkInsert('Expenses', [{
      nameCategory: 'Покупка и ремонт техники',
      createdAt: new Date,
      updatedAt: new Date,
    }], {});
    await queryInterface.bulkInsert('Expenses', [{
      nameCategory: 'Прочие расходы',
      createdAt: new Date,
      updatedAt: new Date,
    }], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Expenses', null, {});
  }
};
