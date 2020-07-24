const createCalc = async ({ request, response }: { request: any, response: any }) => {    
    const body = await request.body()
    const product = body.value 

    console.log(product)
    
    if (!request.hasBody) {
        response.status = 400
        response.body = {
            success: false,
            msg: 'No data'
        }
    } else {
        try {

            response.status = 201
            response.body = {
                success: true,
                data: "product"
            }
        } catch (err) {
            response.status = 500
            response.body = {
                success: false,
                msg: err.toString()
            }
        } finally {
            console.log("done")
        }
    }
}

const returnNo =  async ({ request, response }: { request: any, response: any })  => {
    console.log("made")
    response.status = 500
    response.body = {
        success: false,
        msg: typeof "err"
    }
}

export { createCalc, returnNo }