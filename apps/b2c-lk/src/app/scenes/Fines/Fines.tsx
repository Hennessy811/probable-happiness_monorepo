import React from 'react'
import ContentCard from "../../shared/components/ContentCard";
import Title from "antd/lib/typography/Title";

/**
 * Component about fines and priveledges - scene
 */
const Fines = () => {
    return (
        <>
            <Title>Абонементы</Title>
            <ContentCard>
                Fines component works!
            </ContentCard>
        </>
    )
}

export default Fines;

// function script() {

//     let list = document.querySelector('.ace_line').children
//     let query = list[2].innerHTML;

//     const box = {};

//     box.double = (x) => x * 2;

//     box.floatToInt = (x) => Math.trunc(x);

//     box.numberToString = (x) => String(x);

//     box.square = (x) => x ** 2;

//     box.isEven = (x) => x % 2 === 0;

//     box.squareroot = (x) => Math.sqrt(x);

//     box.stringToNumber = (x) => parseFloat(x);

//     box.reverseString = (x) => x.split("").reverse().join("");

//     box.removeFirstFive = (x) => x.slice(5);

//     box.swapHalves = (x) => {
//         const str = String(x);
//         var half = Math.floor(str.length / 2);
//         return str.substring(half, str.length) + str.substring(0, half);
//     };

//     box.removeLastFive = (x) => {
//         if (x.length < 5) return [];
//         x.length = x.length - 5;
//         return x;
//     };

//     box.sumDigits = (x) => String(x).split('').filter(i => i !== '.' && i !== '-').reduce((a, b) => Number(a) + Number(b), 0)

//     box.dateRank = (x) => {
//         var today = new Date(x.split('/').join(" "));
//         var first = new Date(today.getFullYear(), 0, 1);
//         return Math.round(((today - first) / 1000 / 60 / 60 / 24) + .5, 0);
//     };

//     box.oddElements = (x) => x.filter((item, i) => i % 2 === 0)

//     box.getFileExtension = (x) => {
//         const str = x.split(".");
//         if (str.length === 1) return '';
//         return str[str.length - 1];
//     };

//     box.doubleIndex = (x) => x.filter((item, i) => item === i * 2);

//     box.hasOnlyVowels = (x) => x.split('').every(i => ['a', 'e', 'i', 'o', 'u'].some(v => v === i || v.toUpperCase() === i));

//     box.monthFromUnixTimestamp = (x) => new Date(1002708610 * 1000).getMonth() + 1;

//     box.flatten = function flatten(x) {
//         x.reduce(function (flat, toFlatten) {
//             return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
//         }, []);
//     }

//     box.longestString = (x) => {
//         let max = '';
//         x.forEach(item => {
//             if (item.length > max.length) max = item;
//         });
//         return max;
//     };

//     box.invertCase = (x) => {
//         var s = '';
//         var i = 0;
//         while (i < x.length) {
//             var n = x.charAt(i);
//             if (n == n.toUpperCase()) {
//                 n = n.toLowerCase();
//             } else {
//                 n = n.toUpperCase();
//             }

//             i += 1;
//             s += n;
//         }
//         return s;
//     };

//     box.isBalanced = (x) => {
//         const bracketStack = [];
//         for (let i = 0; i <= x.length; i++) {
//             if (x[i] === '{' || x[i] === '(' || x[i] === '[') {
//                 bracketStack.unshift(x[i]);
//             }

//             switch (x[i]) {
//                 case '}':
//                     if (bracketStack[0] === '(' || bracketStack[0] === '[') return false;
//                     else bracketStack.shift();
//                     break;
//                 case ')':
//                     if (bracketStack[0] === '{' || bracketStack[0] === '[') return false;
//                     else bracketStack.shift();
//                     break;
//                 case ']':
//                     if (bracketStack[0] === '(' || bracketStack[0] === '{') return false;
//                     else bracketStack.shift();
//                     break;
//                 default:
//                     break;
//             }
//         }

//         return !bracketStack.length;

//     };

//     box.sortingType = (x) => {
//         if (x.every((v, i, a) => !i || a[i - 1] <= v)) {
//             return 1;
//         }
//         if (x.every((v, i, a) => !i || a[i - 1] >= v)) {
//             return -1;
//         }
//         return 0;
//     };

//     box.mostFrequentNumber = (x) => {
//         return x.sort((a, b) =>
//             x.filter(v => v === a).length
//             - x.filter(v => v === b).length
//         ).pop();
//     };

//     box.hasBalancePoint = (x) => {
//         if (!Array.isArray(array)) {
//             return [];
//         }

//         var totalSum = array.reduce(sum, 0);
//         var leftSum = 0;

//         return array.reduce(function (points, current, i) {
//             if (i > 0) {
//                 leftSum += array[i - 1];
//             }

//             var rightSum = totalSum - leftSum - current;

//             if (leftSum === rightSum) {
//                 points.push(i);
//             }

//             return !!points.length;
//         }, []);
//     };

//     console.log(box[query]);


//     copyToClipboard(box[query])
//     // $r.editor.setValue(box[query])

//     //     window.prompt("", box[query])
// }

// var $body = document.getElementsByTagName('body')[0];
// var $btnCopy = document.getElementById('btnCopy');
// var secretInfo = "Whao";


// var btn = document.createElement('button');
// btn.innerText = 'Solve!'
// $body.appendChild(btn);

// btn.addEventListener('click', script);

// var copyToClipboard = function (secretInfo) {
//     var $tempInput = document.createElement('INPUT');
//     //         var btn = document.createElement('button');
//     //         btn.innerText = 'Solve!'
//     $body.appendChild($tempInput);
//     //         $body.appendChild(btn);
//     $tempInput.setAttribute('value', secretInfo)
//     $tempInput.select();
//     document.execCommand('copy');
//     $body.removeChild($tempInput);
// }
