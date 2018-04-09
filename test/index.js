const { test } = require('tap')
const Ajv = require('ajv')

const schema = require('..')
const report = require('./fixtures/report.json')
const ajv = new Ajv()

test('schema compiles successfully', assert => {
  assert.plan(2)

  assert.doesNotThrow(() => ajv.addSchema(schema))
  assert.type(ajv.compile(schema), 'function')
})

test('valid json file', assert => {
  assert.plan(1)

  assert.ok(ajv.validate(schema, report.issues[0]))
})
