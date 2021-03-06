export default {
  invalid: [
    {
      code: `
          /***  foo */
          function quux () {

          }
      `,
      errors: [
        {
          line: 2,
          message: 'There must be no indentation.'
        }
      ]
    },
    {
      code: `
          /**
           * foo
           *
           * @param bar
           *  baz
           */
          function quux () {

          }
      `,
      errors: [
        {
          line: 6,
          message: 'There must be no indentation.'
        }
      ]
    },
    {
      code: `
        /**
         * Foo
         *   bar
         */
        class Moo {}
      `,
      errors: [
        {
          line: 4,
          message: 'There must be no indentation.'
        }
      ]
    }
  ],
  valid: [
    {
      code: `
          /**
           * foo
           *
           * @param bar
           * baz
           */
          function quux () {

          }
      `
    },
    {
      code: `
          /*** foo */
          function quux () {

          }
      `
    }
  ]
};
