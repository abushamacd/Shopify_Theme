<hr>
<hr>

## **_Shopify Theme Development Cheat Sheet_**

<hr>
<hr>

[Theme kit install](https://shopify.dev/themes/tools/theme-kit/getting-started)
[Theme kit install](1e89988a1b484a30cdab0b96cc6e28ef)

**I use Linux OS, my installation code is**

```bash
curl -s https://shopify.dev/themekit.py | sudo python3
```

**Shopify is a API based CMS, So, here all work done by API. That's why you need to theme API**

> +++ Note: Access token is show in one time so copy it safely +++

> Go to Settings > Apps and sales channels > Develop apps > Allow custom app development > Allow custom app development > Create an app > give the app name and select email then click create app > Click congfigurations from the top menu > click congifure of Admin API configaration > find out themes and checkmark write_theme and read_theme > save

**Then you need the Store Access token, API key and Secret Key**

> After theme read write check save click the Overview from the top menu > Click Install App and get a pop up click install> then you will see Admin API access token section and click the reveal token once and copy the store password > scroll down and copy API and Secret key for future use

**Create a new theme**

```bash
theme new --password=[your_password] --store="[your_store.myshopify.com]" --name=[theme_name]
```
