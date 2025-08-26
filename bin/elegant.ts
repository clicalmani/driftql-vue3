import DB from "./db"

export default class Elegant extends DB
{
    private namespace = '\\App\\Models\\'
    private name: string = ''

    public constructor(name: string) {
        super()
        this.name = name
        this.query += `${this.namespace + name}`
    }

    public where(conditions: string = '1', options: Array<string | number> = []) {
        this.query += `where('${conditions}', [${options.map(v => `'${v}'`).join()}]) `
        return this
    }

    public first() {
        this.query += '->first()'
        return this
    }

    public get(fields?: string) {
        this.query += `->get(${fields ?? '*'})`
        return this
    }

    public join() {}
}