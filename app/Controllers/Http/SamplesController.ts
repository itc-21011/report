import type {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";

export default class SamplesController {
  public async index(ctx: HttpContextContract) {
    const data = {
      title: '出席管理',
      message: 'ログインされていません。'
    }
    return ctx.view.render('samples/index', data)
  }
}
