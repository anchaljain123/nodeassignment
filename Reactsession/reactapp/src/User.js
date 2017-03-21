/**
 * Created by anchal on 21/3/17.
 */
import React from 'react';

const User =({match})=>( //if stateless-use arrowfn //<!--render &component are props in Route component-->
    <div>
     { match.params.id }

    </div>
);

export default User;