** Express Generator
    //express generator will make a folder previously, which means- we have not need to create the filder by self.
    and express generator push all the file inside the folder.

* Step to use Express Generator..
    // at first install express generator in your system globally.
                (npm i express-generator -g)

* To create new app any where--
    // Open cmd -> move to Desktop
    //Create new app:
    //express appname --view=ejs

    * Now type below command--
        //cd appname
        //npm it on open it on vs code


------------------------------------------------------------------

** FLASH MESSAGES
    Flash messages is used to thoroe errors,alert etc in our website. Suppose we type wrong userID and password, then the backend will check this, and twrow a error in frontend by using flash message..

** Setup Flash Message process -->
    * install connect-flash
    * surely you need to write app.use().
    * create flash in any routes
    * try to run flash in any other routes
    * we need to setup express Session in your file to setup Flash
    * 