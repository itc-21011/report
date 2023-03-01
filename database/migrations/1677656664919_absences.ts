import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'absences'
  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('student_id').notNullable()
      table.integer('kind').notNullable()
      table.string('reason')
      table.datetime('start_date').notNullable()
      table.datetime('end_date')
      table.timestamp('created_at', { useTz: true }).notNullable()
    })
  }
  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
