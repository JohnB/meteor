if (Meteor.isClient) {
  Template.hello.greeting = function () {
      return Session.get("clock");
  };

   setInterval( function() {
       var date = new Date();
       Session.set("clock", date.toTimeString() );
   },1000);
}

