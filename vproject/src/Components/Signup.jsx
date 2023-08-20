import React from 'react'
import '../index.css'

function Signup() {
    return (
        <div className='bg2'>
            <center>
                <h1>SIGNUP PAGE</h1>
                <hr></hr>
                <form className='signup'>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">First Name</span>
                        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Middle Name</span>
                        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Last Name</span>
                        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Recipient's email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <span class="input-group-text" id="basic-addon2">@gmail.com</span>
                    </div>
                    <div class="input-group">
                        <span class="input-group-text">Address</span>
                        <textarea class="form-control" aria-label="With textarea"></textarea>
                    </div>
                    <legend class="mt-4">Gender</legend>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="optionsRadios" id="optionsRadios1" value="option1" />
                        <label class="form-check-label" for="optionsRadios1">Male</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />
                        <label class="form-check-label" for="optionsRadios2">Female</label>
                    </div><br/>
                    <button type="button" class="btn btn-primary btn-lg">Signup</button>

                </form>
            </center>
        </div>
    )
}

export default Signup