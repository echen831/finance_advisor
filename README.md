# Overview

Easy Finance Advisor helps you determine how much money you should put in each investment option based on a list of risk levels.  Chose a risk level and enter amounts
of money you are willing to invest in each option.  Easy Finance Advisor will rebalance and suggest amounts you need to put in each option.


### Please check it out [here](https://easy-finance-advisor.herokuapp.com/#/).

<img src='public/pic_1.png' width='600' height='375' >


## Technologies Used

* React
* Redux
* Javascript
* HTML/CSS
* Recharts
* React Video


## Code Snippets

I wrote the rebalance function utilizing heaps, a min heap and a max heap, to keep track of the min and max values.  This represents which investment options the user needs to transfer money to. The function returns an array of suggested transfers to map out in the component.  I also designed the heaps to take in a node rather than just the value, as the node will hold the value and also the index of where that value is from in relation to a set of keys, an array with the order of investment options.  Therefore, I have fast access to know which option the the amount needs to be transfered to and from. 

```
export const rebalance = (diff, keys) => {
    let heaps = buildMinMaxHeap(diff);
    let minHeap = heaps[0];
    let maxHeap = heaps[1];
    let res = [];

    while (minHeap.array.length > 1 && maxHeap.array.length > 1) {
        let min = minHeap.deleteMin();
        let max = maxHeap.deleteMax();

        const fromCol = keys[min.idx]
        const toCol = keys[max.idx]

        let d = min.val + max.val;

        if (d === 0) {
            const displayMax = round(max.val)
            res.push(`Transfer $${displayMax} from ${fromCol} to ${toCol}`)
        } else if (d > 0) {
            const displayMin = round(Math.abs(min.val))
            res.push(`Transfer $${displayMin} from ${fromCol} to ${toCol}`)
            maxHeap.insert(d, max.idx)
        } else {
            const displayMax = round(Math.abs(max.val))
            res.push(`Transfer $${displayMax} from ${fromCol} to ${toCol}`)
            minHeap.insert(d, min.idx)
        }
    }


    return res;

}

```
I used the Redux store to keep track of the set of risk level options and had it save to the store right from the start as preloadededState so that all components have access to them as soon as the DOM loads.

```
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const preloadedState = {
    entities: {
      riskLevels: RiskLevels,
      current: {currentIdx: 0}
    }
  }
  const store = configureStore(preloadedState);

  ReactDOM.render(<Root store={store}/>, root)
})


```
Ustilized Recharts library for simple and smoothe pie chart rendering.
```
             <PieChart width={700} height={400} >
                <Pie
                    data={formatData(data)}
                    cx={350}
                    cy={200}
                    innerRadius={50}
                    outerRadius={150}
                    label= "name"
                    fill="#8884d8"
                    paddingAngle={0}
                    dataKey="value"
                >
                    {
                        formatData(data).map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                    }
                </Pie>
                <Legend verticalAlign="top" height={10}></Legend>
            </PieChart>
```

## Please be sure to visit my portfolio and github to checkout my other projects!

[LinkedIn](https://www.linkedin.com/in/eric-chen-782b951a9/) <br>
[Github](https://github.com/echen831) <br>
[Portfolio](https://echen831.github.io/Eric-Chen/)
