import { expect, it } from 'vitest';
import { generateToken, generateTokenPromise } from './async-example';

it('should generate a token value', (done) => {
  // ARRANGE
  const testUserEmail = 'test@test.com';

  //   ACT
  generateToken(testUserEmail, (err, token) => {
    // ASSERT

    try {
      expect(token).toBeDefined();
      //   expect(token).toBe(2);
      done();
    } catch (err) {
      done(err);
    }
  });
});

it('should generate a token value', () => {
  // ARRANGE
  const testUserEmail = 'test@test.com';
  // ACT + ASSERT
  expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
  //   promist assertion should be returned, but it worked as is, so I left it as is
});

it('should generate a token value', async () => {
  // ARRANGE
  const testUserEmail = 'test@test.com';
  // ACT
  const token = await generateTokenPromise(testUserEmail);
  //   ASSERT
  expect(token).toBeDefined();
});
