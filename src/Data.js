function Data() {
    return (
      <div class="container">
         <form>
            <h3>Registration Form </h3>
            <p>Frist name:
               <input type="text" />
           </p>
           <p>last name :
               <input type="text" />
           </p>
           <p >Gender :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <input type="radio" name="fav_language"/> Male&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <input type="radio" name="fav_language"/> Female
           
           </p>
           <p>Email :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <input type="mail" />
           </p>
           <p>Address :&nbsp;&nbsp;&nbsp;&nbsp;
               <input type="text" />
           </p>
           <p>Number :&nbsp;&nbsp;&nbsp;&nbsp;
               <input type="number" />
           </p>
           <p><button>Submit</button>
           <button>Reset</button>
           </p>
        </form>
      </div>
    );
}

export default Data;