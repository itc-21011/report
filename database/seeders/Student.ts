import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import students from 'App/Models/students'

export default class studentsSeeder extends BaseSeeder {
  public async run () {
    await students.createMany([
      {
        code: 's10001',
        name: 'taro',
      },
      {
        code: 's10002',
        name: 'hanako'
      },
    ])
  }
}
