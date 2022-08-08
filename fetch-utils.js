const SUPABASE_URL = 'https://ibfimxopxwngijoyxknw.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjY4NDQ3MSwiZXhwIjoxOTUyMjYwNDcxfQ.ewbC-sV1ELppz_IP21q0P7QEX_VoDqbi_ZZ1__Uphvs';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getAnimals() {
    const resp = await client.from('farm_animals').select('*');
    console.log('resp', resp);
    if (resp.error) {
        throw new Error(resp.error.message);
    }
    return resp.data;
}

export async function getAnimalById(id) {
    const resp = await client.from('farm_animals').select('*').match({ id }).single();
    console.log('resp', resp);
    if (resp.error) {
        throw new Error(resp.error.message);
    }
    return resp.data;
}
