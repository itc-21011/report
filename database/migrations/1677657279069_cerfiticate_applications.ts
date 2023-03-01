import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'cerfiticate_applications'
  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('certificate_of_enrollment').defaultTo(0)
      table.integer('transcript').defaultTo(0)
      table.integer('attendance_certificate').defaultTo(0)
      table.integer('certificate_of_expected_graduation').defaultTo(0)
      table.integer('graduation_certificate').defaultTo(0)
      table.integer('health_certificate').defaultTo(0)
      table.timestamp('created_at', { useTz: true })
      table.timestamp('scheduled_date', { useTz: true })
    })
  }
  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
