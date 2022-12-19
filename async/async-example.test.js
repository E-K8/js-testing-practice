import { expect, it } from 'vitest';
import { generateToken } from './async-example';

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
