export function init () {
  describe('between', function () {
    it('should work')

    it('should not allow index access after operation', function () {
      const Test = this
      const collection = Test.PostCollection

      Test.assert.throws(function () {
        collection.query().filter().between().run()
      }, Error)
    })
  })
}
