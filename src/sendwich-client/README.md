# SendwichSDK

## Use

```ts
const result = await sendwichClient.send(new MyCommand())
if (!result.isSuccessful) {
    // error
    return;
}

result.data // response data
```

## 확장

```ts
class MyOperation implements Command {

    async send() {
        // implement logic
    }
}

await sendwichClient.send(new MyOperation())
```