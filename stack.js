// last in first out aka. LIFO
class Stack {
    constructor(...items) {
        console.log(items) // items: [4, 5]
        this.reverse = false;
        this._array = [...items]; // ...items : 4, 5
    }

    push(...items) {
        // return the number of elements in the array (this.stack)
        return this.reverse
            ? this._array.unshift(...items)
            : this._array.push(...items);
    }

    pop() {
        return this.reverse
            ? this._array.shift()
            : this._array.pop();
    }
}

const makeDiv = (className) => {
    $("<div>", { id: })
}

const test1 = () => {
    const stack = new Stack(4, 57);
    const x = stack.push(6, 4, 7);
    console.log(x);
    console.log(stack._array);
    const y = stack.pop();
    console.log(y);
    console.log(stack._array);
}

test1()

//         assert.equal(stack.push(1, 2, 3), 5);
//         assert.deepEqual(stack.stack, [4, 5, 1, 2, 3]);

//     it("Should push items to bottom of stack", () => {
//         const stack = new Stack(4, 5);
//         stack.reverse = true;
//         assert.equal(stack.push(1, 2, 3), 5);
//         assert.deepEqual(stack.stack, [1, 2, 3, 4, 5]);
//     });

//     it("Should pop item from top of stack", () => {
//         const stack = new Stack(1, 2, 3);
//         assert.equal(stack.pop(), 3);
//     });

//     it("Should pop item from bottom of stack", () => {
//         const stack = new Stack(1, 2, 3);
//         stack.reverse = true;
//         assert.equal(stack.pop(), 1);
//     });
// });

// mocha.run();
