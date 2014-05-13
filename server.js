require('kode');

defineObject('lib:object', {
    methodA: function(){
        console.log(this.identifier);
    },
    methodB: function(){
        console.log(this.identifier);
    }
});

defineObject('lib:model', 'lib:object', {
    methodA: function(){
        this.parentMethod();
    },
    methodB: function(){
        this.parentMethod();
    }
});

defineObject('com:model.users', 'lib:model', {
    methodA: function(){
        this.parentMethod();
    },
    methodB: function(){
        this.parentMethod();
    }
});

var model = getObject('com:model.users');

model.methodB();
