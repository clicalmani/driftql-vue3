import { request } from "./xhr"
import Elegant from "./elegant"

export default class DB 
{
    protected query: string = ''
    
    public constructor() {}

    public model(name: string) {
        return new Elegant(name)
    }

    public table(name: string) {
        this.query = `\\Clicalmani\\Foundation\\Support\\Facades\\DB::table(${name})`
        return this
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

    public async send(uri: string, method?: "GET" | "POST" | "PATCH" | "DELETE") {
        return await request(uri, {
            method: method ?? 'GET',
            body: new URLSearchParams(`query=${this.query}`)
        })
    }
}