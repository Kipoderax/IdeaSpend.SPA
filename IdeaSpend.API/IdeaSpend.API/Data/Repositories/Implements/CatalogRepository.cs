﻿using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace IdeaSpend.API
{
    public class CatalogRepository : BaseRepository, ICatalogRepository
    {
        #region Constructor

        public CatalogRepository( IdeaSpendContext dataContext ) : base ( dataContext ) { }

        #endregion

        #region Implemented Methods

        public async Task<bool> CreateCatalogAsync( CatalogEntity catalogEntity )
        {
            await _dataContext.AddAsync ( catalogEntity );
            return await _dataContext.SaveChangesAsync() > 0;
        }

        
        public int FindCatalogIdByName( string catalogName )
        {
            // Go to catalog table
            var id = _dataContext.Catalogs

                // Get first match catalog id filtered by catalog name
                .FirstOrDefault ( n => n.CatalogName == catalogName ).CatalogId;

            return id;
        }

        
        public bool IsExistCatalog( string catalogName, int userId )
        {
            return _dataContext.Catalogs
                .Where(i => i.UserId == userId)
                .Any ( n => n.CatalogName == catalogName );
        }

        
        /// <summary>
        /// Get all catalogs which user have
        /// </summary>
        public IEnumerable<CatalogEntity> GetCatalogs( int userId )
        {
            return _dataContext.Catalogs
                .Where ( id => id.UserId == userId );
        }

        public bool DeleteCatalog(int catalogId)
        {
            var foundEntity = _dataContext.Catalogs.Find(catalogId);

            if (foundEntity == null)
                return false;
            
            _dataContext.Catalogs.Remove(foundEntity);
            return _dataContext.SaveChanges() > 0;
        }
        
        #endregion
    }
}