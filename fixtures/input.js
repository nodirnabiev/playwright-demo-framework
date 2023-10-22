const { faker } = require('@faker-js/faker');

const userEnrollmentDetails = {
    "customer.firstName": faker.person.firstName(),
    "customer.lastName": faker.person.lastName(),
    "customer.address.street": faker.location.buildingNumber(),
    "customer.address.city": faker.location.city(),
    "customer.address.state": faker.location.state({ abbreviated: true}),
    "customer.address.zipCode": faker.location.zipCode(),
    "customer.phoneNumber": faker.phone.number(),
    "customer.ssn": faker.string.numeric({ length: 9 }),
    "customer.username": faker.internet.userName(),
    "customer.password": "Test1234",
    "customer.password": "Test1234"

}

module.exports.userEnrollmentDetails = userEnrollmentDetails;