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

> try ~ catch 는 작동 안함. finally 는 당연히 합니당

## 확장

```ts
class MyOperation implements Command {

    async send() {
        // implement logic
    }
}

await sendwichClient.send(new MyOperation())
```