import { it, expect, beforeAll, beforeEach, afterAll, afterEach } from 'vitest';

import { User } from './hooks';

const testEmail = 'test@test.com';
let user; // it makes sense to create a global variable when there are lots of tests and test suites

beforeAll(() => {
  user = new User(testEmail);
  console.log('beforeAll()');
});

beforeEach(() => {
  console.log('beforeEach()');
});

afterEach(() => {
  user = new User(testEmail);

  console.log('afterEach()');
});

afterAll(() => {
  console.log('afterAll()');
});

// afterAll is good for cleanup work, for example erase a temporary database that was only created to test stuff

it('should update the email', () => {
  const newTestEmail = 'test2@test.com';

  user.updateEmail(newTestEmail);

  expect(user.email).toBe(newTestEmail);
});

it('should have an email property', () => {
  expect(user).toHaveProperty('email');
});

it('should store the provided email value', () => {
  expect(user.email).toBe(testEmail);
});

it('should clear the email', () => {
  user.clearEmail();

  expect(user.email).toBe('');
});

it('should still have an email property after clearing the email', () => {
  user.clearEmail();

  expect(user).toHaveProperty('email');
});
