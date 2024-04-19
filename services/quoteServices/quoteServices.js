const quoteDao = require("../../dao/quoteDao/quoteDao");
// const visitorDao = require("../../dao/visitorDao/visitorDao");
// const emailTemplateDao = require("../../dao/emailTemplateDao/emailTemplateDao");
// const emailService = require("./emailService");
// const emailTemplatesStructure = require("../../utils/emailTemplatesStructure");

// const createQuote = async (quoteData) => {
//   let id = quoteData.id_visitor;
//   const quote = await quoteDao.createQuote(quoteData);
//   let email = await prepareAfterQuoteCreationEmail(id, quote);
//   await emailService.sendEmail(email);
//   return quote;
// };


const getQuoteById = async (id) => {
  return await quoteDao.getQuoteById(id);
};

const getQuotes = async () => {
  return await quoteDao.getQuotes();
};

const getQuoteByIdSchedule = async (id) =>{

  console.log("quote service",id)
  return await quoteDao.getQuoteByIdSchedule(id);
}

const updateQuote = async (id, updateData) => {
  return await quoteDao.updateQuote(id, updateData);
};

const deleteQuote = async (id) => {
  return await quoteDao.deleteQuote(id);
};

// const sendBookingEmail = async (bookingData) => {
//   let id = bookingData.id_visitor;
//   let price = bookingData.price;
//   let quote_id = bookingData.quote_id;
//   let email = await prepareQuoteBookingEmail(id, price, quote_id);
//   await emailService.sendEmail(email);
//   return "Booking Email sent!";
// };

// async function prepareAfterQuoteCreationEmail(idVisitor, quote) {
//   console.log(quote.type);
//   let visitor = await visitorDao.getVisitorById(idVisitor);
//   let recipient = visitor.email;
//   //const email = await emailTemplateDao.getEmailTemplateByName('visitor quote reception');
//   const creationDate = quote.createdAt;

//   const formattedCreationDate = creationDate.toLocaleString("en-GB", {
//     day: "2-digit",
//     month: "2-digit",
//     year: "numeric",
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit",
//   });
//   let selectedTemplate = "";
//   switch (quote.type) {
//     case "One way":
//       selectedTemplate =
//         emailTemplatesStructure.emailTemplates.one_way_quote_received(
//           visitor,
//           quote,
//           formattedCreationDate
//         );
//       break;
//     case "Return":
//       selectedTemplate =
//         emailTemplatesStructure.emailTemplates.with_return_quote_received(
//           visitor,
//           quote,
//           formattedCreationDate
//         );
//       break;
//     default:
//       console.log("Wrong type");
//   }
//   let emailBody = selectedTemplate;
//   let emailSubject = "Quote Request Received";
//   let fullEmailObject = {
//     to: recipient,
//     subject: emailSubject,
//     body: emailBody,
//   };
//   return fullEmailObject;
// }

// async function prepareQuoteBookingEmail(idVisitor, price, quote_id) {
//   let visitor = await visitorDao.getVisitorById(idVisitor);
//   let recipient = visitor.email;
//   let emailBody = emailTemplatesStructure.emailTemplates.booking(
//     visitor,
//     price,
//     quote_id
//   );
//   let emailSubject = "Booking Processed";
//   let fullEmailObject = {
//     to: recipient,
//     subject: emailSubject,
//     body: emailBody,
//   };
//   return fullEmailObject;
// }

module.exports = {
//   createQuote,
  getQuotes,
  updateQuote,
  deleteQuote,
  getQuoteById,
//   sendBookingEmail,
  getQuoteByIdSchedule
};