import {WordpressBaker} from './WordpressBaker'

async function main() {
    const baker = new WordpressBaker({})
    try {
        await baker.bakeAll()
    } catch (err) {
        console.error(err)
    } finally {
        baker.end()
    }
}

main()