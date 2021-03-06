﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;

namespace IdeaSpend.API
{
    [Table("Produkty")]
    public class ProductEntity
    {
        #region Primary Key

        [Key] public int ProductId { get; init; }

        #endregion

        #region Columns

        /// <summary>
        /// The name of products or services
        /// </summary>
        [Column("nazwa_produktu")]
        public string ProductName { get; set; }
        
        /// <summary>
        /// The source product bought from
        /// </summary>
        [Column("sprzedawca")]
        public string Seller { get; set; }
        
        /// <summary>
        /// The price in specific currency
        /// </summary>
        [Column("cena")] [Required]
        public double Price { get; set; }

        /// <summary>
        /// The unit weight like kg, g, dkg
        /// </summary>
        [Column("jednostka")]
        public string Unit { get; set; }

        #endregion

        #region Relations

        /// <summary>
        /// The foreign catalog id for Produkty table. Catalog with id = 0 means that product is without catalog
        /// </summary>
        [AllowNull]
        public int? CatalogId { get; set; }
        
        /// <summary>
        /// One of many products are assign to specify catalog
        /// </summary>
        public CatalogEntity Catalog { get; set; }

        /// <summary>
        /// The foreign user id for Produkty table
        /// </summary>
        public int UserId { get; set; }

        /// <summary>
        /// One of many products are assign to specify user
        /// </summary>
        public UserEntity User { get; set; }
        
        public TransactionEntity Transaction { get; set; }
        
        #endregion
    }
}