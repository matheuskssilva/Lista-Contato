import * as enums from '../utils/enums/Contact'

class Contato {
    name: string
    tag: enums.Category
    tel: number
    email: string
    id: number

  constructor(
      name: string,
      tag: enums.Category,
      tel: number,
      email: string,
      id: number,
  ) {
    this.id = id
    this.name = name
    this.tag = tag
    this.tel = tel
    this.email = email
  }
}

export default Contato