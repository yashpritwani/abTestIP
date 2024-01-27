// const redis = require('redis');
const redis = require('ioredis');
const crypto = require('crypto');
const client = redis.createClient({
  host:'localhost',
  port:'6379'
});

async function getLayoutForUser(ipAddress) {
  try {
    ipAddress=ipAddress.toString()+"kgf1";
      const existingLayout = await client.get(ipAddress);
      console.log("existingLayout",existingLayout);
      if (existingLayout !== null) {
          return {
            existingLayout: true,
            ...existingLayout
          };
      } else {
        const hash = crypto.createHash('sha256').update(ipAddress).digest('hex');
        const layoutIndex = parseInt(hash, 16) % 3;
        const layoutAssignment = `layout${layoutIndex + 1} {msg: Layout existed}`;

        await client.set(ipAddress, layoutAssignment);
        return {
          existingLayout: false,
          ...layoutAssignment
        };;
      }
  } catch (err) {
      console.error('Error in getLayoutForUser:', err);
      throw err;
  }
}

async function determineLayout(ipAddress,details) {
  try {
    ipAddress=ipAddress.toString()+"kgf1";
      const hash = crypto.createHash('sha256').update(ipAddress).digest('hex');
      const layoutIndex = parseInt(hash, 16) % 3;
      const layoutAssignment = `layout${layoutIndex + 1}, ${JSON.stringify(details)}`;
      console.log("newLayout",layoutAssignment);

      await client.set(ipAddress, layoutAssignment);

      return layoutAssignment;
  } catch (err) {
      console.error('Error in determineLayout:', err);
      return err;
  }
}

module.exports = {getLayoutForUser, determineLayout};